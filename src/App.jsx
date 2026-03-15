import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut 
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  getDocs, 
  setDoc,
  doc,
  getDoc,
  query, 
  where,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';

// 메인 앱 컴포넌트
export default function App() {
  const [view, setView] = useState('LOGIN');
  const [userRole, setUserRole] = useState(null); // 'student' or 'teacher'
  const [user, setUser] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  // Firebase Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await fetchUserRole(currentUser.uid);
        setView('MAIN');
      } else {
        setUser(null);
        setUserRole(null);
        setView('LOGIN');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchUserRole = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserRole(userData.role);
        setName(userData.name);
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  const fetchRecords = async () => {
    if (!user) return;
    try {
      let q;
      if (userRole === 'teacher') {
        // 교사는 모든 기록을 최신순으로 확인
        q = query(collection(db, "records"), orderBy("timestamp", "desc"));
      } else {
        // 학생은 본인 기록만 확인
        q = query(
          collection(db, "records"), 
          where("studentId", "==", user.uid),
          orderBy("timestamp", "desc")
        );
      }
      
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRecords(data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  useEffect(() => {
    if (userRole && (view === 'TEACHER' || view === 'MAIN')) {
      fetchRecords();
    }
  }, [view, userRole, user]);

  const handleLogin = async () => {
    if (!email || !password) return alert("이메일과 비밀번호를 입력해주세요.");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password || !name) return alert("모든 정보를 입력해주세요.");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      
      // 사용자 정보를 Firestore에 저장 (UID를 문서 ID로 사용)
      await setDoc(doc(db, "users", newUser.uid), {
        uid: newUser.uid,
        name: name,
        role: userRole,
        email: email,
        createdAt: serverTimestamp()
      });
      
      alert("회원가입이 완료되었습니다!");
      setView('MAIN');
    } catch (error) {
      alert("회원가입 실패: " + error.message);
    }
  };

  const submitActivity = async (activityName, feedbackText) => {
    if (!user) return;
    try {
      await addDoc(collection(db, "records"), {
        studentId: user.uid,
        name: name,
        activity: activityName,
        feedback: feedbackText,
        status: '완료',
        date: new Date().toLocaleDateString(),
        timestamp: serverTimestamp()
      });
      alert('활동 기록이 제출되었습니다!');
      setFeedback(''); // 입력창 초기화
      setView('MAIN');
    } catch (error) {
      alert("제출 실패: " + error.message);
    }
  };

  const Header = () => (
    <div className="bg-blue-600 text-white p-4 text-center font-bold shadow-md">
      <div className="flex justify-between items-center max-w-md mx-auto mb-1">
        <p className="text-xs opacity-80">라이프 스킬을 통한</p>
        {user && <button onClick={() => auth.signOut()} className="text-xs bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded transition-colors">로그아웃</button>}
      </div>
      <h1 className="text-xl">피지컬 리터러시 기르기</h1>
    </div>
  );

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium">데이터를 불러오는 중...</p>
    </div>
  );

  // 1. 로그인 화면
  if (view === 'LOGIN') {
    return (
      <div className="max-w-md mx-auto border min-h-screen flex flex-col bg-white shadow-xl">
        <Header />
        <div className="flex-1 flex flex-col justify-center p-8 gap-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">반갑습니다!</h2>
            <p className="text-gray-500 text-sm">로그인하여 운동을 시작하세요.</p>
          </div>
          <div className="space-y-4">
            <input 
              className="w-full border-b-2 p-3 focus:border-blue-500 outline-none transition-colors" 
              placeholder="이메일 주소" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              className="w-full border-b-2 p-3 focus:border-blue-500 outline-none transition-colors" 
              type="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-bold shadow-lg transform active:scale-95 transition-all">로그인</button>
          <button onClick={() => setView('TYPE')} className="text-blue-500 font-medium text-sm hover:underline">아직 회원이 아니신가요? 회원가입</button>
        </div>
      </div>
    );
  }

  // 2. 가입 유형 선택
  if (view === 'TYPE') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl">
        <Header />
        <div className="p-8 flex-1">
          <h2 className="text-xl font-bold mb-8 text-center text-gray-800">어떤 유형으로 가입하시나요?</h2>
          <div className="grid grid-cols-2 gap-6">
            <div onClick={() => { setUserRole('student'); setView('TERMS'); }} className="bg-white border-2 border-transparent hover:border-blue-500 p-8 rounded-2xl shadow-sm hover:shadow-md flex flex-col items-center cursor-pointer transition-all group">
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">👤</span>
              <p className="font-bold text-lg text-gray-700">학생</p>
            </div>
            <div onClick={() => { setUserRole('teacher'); setView('TERMS'); }} className="bg-white border-2 border-transparent hover:border-blue-500 p-8 rounded-2xl shadow-sm hover:shadow-md flex flex-col items-center cursor-pointer transition-all group">
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">👨‍🏫</span>
              <p className="font-bold text-lg text-gray-700">선생님</p>
            </div>
          </div>
          <button onClick={() => setView('LOGIN')} className="mt-12 w-full p-3 text-gray-400 hover:text-gray-600 transition-colors">이전으로 돌아가기</button>
        </div>
      </div>
    );
  }

  // 3. 약관 동의
  if (view === 'TERMS') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white p-6 flex flex-col shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-gray-800">이용약관 동의</h2>
        <div className="flex-1 overflow-y-auto border rounded-lg p-4 text-sm text-gray-600 bg-gray-50 mb-6 leading-relaxed">
          <p className="font-bold mb-2">■ 서비스 이용약관</p>
          본 서비스는 학생들의 신체 활동을 기록하고 관리하기 위한 목적으로 제공됩니다. 수집된 정보는 교육적 목적으로만 사용되며, 동의 없이 제3자에게 제공되지 않습니다...
        </div>
        <div className="space-y-3 mb-8">
          <label className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-5 h-5 accent-blue-600" /> 
            <span className="text-gray-700">이용약관에 동의합니다. (필수)</span>
          </label>
          <label className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-5 h-5 accent-blue-600" /> 
            <span className="text-gray-700">개인정보 수집 및 이용에 동의합니다. (필수)</span>
          </label>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setView('TYPE')} className="flex-1 border-2 p-4 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">이전</button>
          <button onClick={() => setView('AUTH')} className="flex-1 bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-colors">다음 단계</button>
        </div>
      </div>
    );
  }

  // 4. 본인 인증
  if (view === 'AUTH') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white p-8 flex flex-col items-center justify-center text-center shadow-xl">
        <div className="bg-blue-50 p-6 rounded-full mb-6">
          <span className="text-6xl">📱</span>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">본인 인증</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">안전한 서비스 이용을 위해<br/>휴대폰 본인인증이 필요합니다.</p>
        <button onClick={() => {
          if(window.confirm("인증을 진행하시겠습니까?")) { setView('SIGNUP'); }
        }} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all transform active:scale-95">인증하기</button>
        <button onClick={() => setView('TERMS')} className="mt-6 text-gray-400 text-sm hover:underline">이전으로</button>
      </div>
    );
  }

  // 5. 회원가입 정보 입력
  if (view === 'SIGNUP') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white p-8 overflow-y-auto shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">정보 입력 <span className="text-blue-600 text-lg">({userRole === 'student' ? '학생' : '선생님'})</span></h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">이름</label>
            <input 
              className="w-full border-2 p-3 rounded-xl focus:border-blue-500 outline-none transition-all" 
              placeholder="실명을 입력해주세요" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">이메일 주소</label>
            <input 
              className="w-full border-2 p-3 rounded-xl focus:border-blue-500 outline-none transition-all" 
              placeholder="example@email.com" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">비밀번호</label>
            <input 
              className="w-full border-2 p-3 rounded-xl focus:border-blue-500 outline-none transition-all" 
              type="password" 
              placeholder="8자 이상 (영문+숫자)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleSignUp} className="w-full bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl font-bold mt-12 shadow-lg transition-all transform active:scale-95">가입 완료 및 로그인</button>
      </div>
    );
  }

  // 6. 메인 화면
  if (view === 'MAIN') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl">
        <Header />
        <div className="p-8 flex-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <p className="text-xl text-gray-800"><b>{name || '사용자'}</b>님, 환영합니다! 👋</p>
            <p className="text-gray-500 text-sm mt-1">{userRole === 'student' ? '오늘의 운동을 기록해보세요.' : '학급 활동을 관리해보세요.'}</p>
          </div>
          
          <div className="grid gap-4">
            <button onClick={() => setView('ACTIVITY_LIST')} className="p-6 bg-white border-2 border-blue-100 hover:border-blue-500 rounded-2xl text-left flex justify-between items-center transition-all shadow-sm group">
              <div>
                <p className="font-bold text-lg text-blue-600">운동 시작하기 →</p>
                <p className="text-sm text-gray-500">다양한 신체 활동 알아보기</p>
              </div>
              <span className="text-3xl group-hover:translate-x-2 transition-transform">🏃‍♂️</span>
            </button>
            
            <button className="p-6 bg-white border-2 border-gray-100 hover:border-gray-300 rounded-2xl text-left flex justify-between items-center transition-all shadow-sm group">
              <div>
                <p className="font-bold text-lg text-gray-700">마이 페이지 →</p>
                <p className="text-sm text-gray-500">나의 운동 기록과 통계</p>
              </div>
              <span className="text-3xl group-hover:translate-x-2 transition-transform">📊</span>
            </button>

            {userRole === 'teacher' && (
              <button onClick={() => setView('TEACHER')} className="p-6 bg-gray-800 hover:bg-gray-900 text-white rounded-2xl text-left flex justify-between items-center transition-all shadow-xl mt-4 group">
                <div>
                  <p className="font-bold text-lg">학급 활동 리포트 →</p>
                  <p className="text-sm text-gray-400">학생들의 기록 실시간 확인</p>
                </div>
                <span className="text-3xl group-hover:scale-110 transition-transform">📋</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 7. 활동 리스트
  if (view === 'ACTIVITY_LIST') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white shadow-xl">
        <div className="p-5 border-b flex items-center gap-4 bg-white sticky top-0 z-10">
          <button onClick={() => setView('MAIN')} className="text-2xl hover:text-blue-600 transition-colors">←</button>
          <span className="font-bold text-lg text-gray-800">활동 선택</span>
        </div>
        <div className="p-6 space-y-3">
          {['운동 체력 기르기', '축구형 게임', '배구형 게임', '높이뛰기 도전', '댄스 스포츠'].map((act, i) => (
            <div key={i} onClick={() => setView('ACTIVITY_DETAIL')} className="p-5 border rounded-2xl hover:bg-blue-50 hover:border-blue-300 cursor-pointer flex justify-between items-center transition-all group">
              <span className="font-medium text-gray-700">{act}를 알아보아요</span>
              <span className="text-gray-300 group-hover:text-blue-500 transition-colors text-xl">›</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 8. 활동 상세 기록
  if (view === 'ACTIVITY_DETAIL') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white flex flex-col shadow-xl">
        <div className="p-5 border-b font-bold flex justify-between items-center bg-white sticky top-0 z-10">
          <span className="text-gray-800">활동 상세 기록</span>
          <button onClick={() => setView('ACTIVITY_LIST')} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="bg-blue-50 p-5 rounded-2xl mb-8 border border-blue-100">
            <p className="text-blue-800 text-sm leading-relaxed">활동을 완료한 후, 느낀 점이나 소감을 아래에 자유롭게 작성해주세요. 사진이나 영상을 함께 업로드하면 더욱 좋습니다!</p>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3">인증 파일 (선택)</label>
            <div className="border-2 border-dashed border-gray-200 p-10 text-center text-gray-400 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-blue-300 transition-all">
              <span className="text-4xl block mb-2">📸</span>
              파일 선택 (사진/영상)
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3">활동 후기</label>
            <textarea 
              className="w-full border-2 p-4 h-40 rounded-2xl focus:border-blue-500 outline-none transition-all resize-none text-sm" 
              placeholder="활동하면서 어떤 점이 즐거웠나요? 어려운 점은 없었나요?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <button 
            onClick={() => submitActivity('선택한 신체활동', feedback)} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl font-bold shadow-xl transition-all transform active:scale-95"
          >인증 완료 및 제출</button>
        </div>
      </div>
    );
  }

  // 9. 교사용 리포트
  if (view === 'TEACHER') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl">
        <div className="p-5 bg-gray-800 text-white flex justify-between items-center font-bold sticky top-0 z-10 shadow-lg">
          <span className="flex items-center gap-2">학급 활동 리포트 <span className="bg-blue-500 text-[10px] px-2 py-0.5 rounded-full">LIVE</span></span>
          <button onClick={() => setView('MAIN')} className="text-xs bg-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-600 transition-colors">홈으로</button>
        </div>
        <div className="p-5 flex-1 overflow-y-auto">
          {records.length === 0 ? (
            <div className="text-center py-20 text-gray-400">아직 제출된 활동 기록이 없습니다.</div>
          ) : (
            <div className="space-y-4">
              {records.map((r) => (
                <div key={r.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="font-bold text-gray-800 text-lg">{r.name}</span>
                      <span className="text-xs text-gray-400 ml-2">{r.date}</span>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold">확인완료</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">{r.activity}</p>
                  <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-xl italic">"{r.feedback || '후기 없음'}"</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
