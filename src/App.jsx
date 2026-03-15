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
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';

// 메인 앱 컴포넌트
export default function App() {
  // 화면 전환을 위한 상태 (view: LOGIN, TYPE, TERMS, AUTH, SIGNUP, MAIN, ACTIVITY, TEACHER)
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserRole(currentUser.uid);
        setView('MAIN');
      } else {
        setView('LOGIN');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchUserRole = async (uid) => {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserRole(doc.data().role);
      setName(doc.data().name);
    });
  };

  const fetchRecords = async () => {
    let q;
    if (userRole === 'teacher') {
      q = collection(db, "records");
    } else {
      q = query(collection(db, "records"), where("studentId", "==", user?.uid));
    }
    
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRecords(data);
  };

  useEffect(() => {
    if (view === 'TEACHER' || view === 'MAIN') {
      fetchRecords();
    }
  }, [view, userRole]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      
      // Store user info in Firestore
      await addDoc(collection(db, "users"), {
        uid: newUser.uid,
        name: name,
        role: userRole,
        email: email
      });
      
      alert("회원가입 완료!");
      setView('MAIN');
    } catch (error) {
      alert("회원가입 실패: " + error.message);
    }
  };

  const submitActivity = async (activityName, feedback) => {
    try {
      await addDoc(collection(db, "records"), {
        studentId: user.uid,
        name: name,
        activity: activityName,
        feedback: feedback,
        status: '완료',
        date: new Date().toISOString().split('T')[0],
        timestamp: serverTimestamp()
      });
      alert('제출되었습니다!');
      setView('MAIN');
    } catch (error) {
      alert("제출 실패: " + error.message);
    }
  };

  // 공통 레이아웃: 헤더
  const Header = () => (
    <div className="bg-blue-600 text-white p-4 text-center font-bold">
      <div className="flex justify-between items-center max-w-xs mx-auto mb-1">
        <p className="text-xs opacity-80">라이프 스킬을 통한</p>
        {user && <button onClick={() => auth.signOut()} className="text-xs bg-blue-700 px-2 py-1 rounded">로그아웃</button>}
      </div>
      <h1 className="text-xl">피지컬 리터러시 기르기</h1>
    </div>
  );

  if (loading) return <div className="flex items-center justify-center h-screen">로딩 중...</div>;

  // 1. 로그인 화면
  if (view === 'LOGIN') {
    return (
      <div className="max-w-md mx-auto border h-[700px] flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex flex-col justify-center p-8 gap-4">
          <input 
            className="border-b p-2 focus:outline-none" 
            placeholder="이메일 (아이디)" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            className="border-b p-2 focus:outline-none" 
            type="password" 
            placeholder="비밀번호" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-blue-500 text-white p-3 rounded font-bold">로그인</button>
          <button onClick={() => setView('TYPE')} className="text-gray-500 text-sm">회원가입</button>
        </div>
      </div>
    );
  }

  // ... (TYPE, TERMS, AUTH views remain similar)

  // 5. 회원가입 양식 
  if (view === 'SIGNUP') {
    return (
      <div className="max-w-md mx-auto border h-[700px] bg-white p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">정보 입력 ({userRole === 'student' ? '학생' : '선생님'})</h2>
        <div className="flex flex-col gap-4 text-sm">
          <div><p className="mb-1 font-bold">이름</p>
            <input 
              className="w-full border p-2 rounded" 
              placeholder="이름 입력" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div><p className="mb-1 font-bold">이메일</p>
            <input 
              className="w-full border p-2 rounded" 
              placeholder="이메일 입력" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div><p className="mb-1 font-bold">비밀번호</p>
            <input 
              className="w-full border p-2 rounded" 
              type="password" 
              placeholder="8~20자 영문+숫자 조합" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* ... other fields like gender, school, grade can be added as state later */}
        </div>
        <button onClick={handleSignUp} className="w-full bg-green-500 text-white p-4 rounded-lg font-bold mt-8">가입 완료</button>
      </div>
    );
  }

  // 6. 메인 화면
  if (view === 'MAIN') {
    return (
      <div className="max-w-md mx-auto border h-[700px] bg-white flex flex-col">
        <Header />
        <div className="p-8 flex-1">
          <p className="text-xl mb-8"><b>{name || '사용자'}</b> 님 반갑습니다.</p>
          <div className="grid gap-4">
            <button onClick={() => setView('ACTIVITY_LIST')} className="p-6 border-2 border-blue-500 rounded-xl text-left flex justify-between items-center group hover:bg-blue-50">
              <div><p className="font-bold text-lg text-blue-600">운동 시작 →</p><p className="text-sm text-gray-500">학년별 맞춤 활동을 확인하세요</p></div>
            </button>
            <button className="p-6 border rounded-xl text-left flex justify-between items-center hover:bg-gray-50">
              <div><p className="font-bold text-lg">마이 페이지 →</p><p className="text-sm text-gray-500">나의 운동 기록과 통계</p></div>
            </button>
            {userRole === 'teacher' && (
              <button onClick={() => setView('TEACHER')} className="p-4 bg-gray-800 text-white rounded-xl mt-4">학급 활동 관리 (교사용)</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ... (ACTIVITY_LIST remains similar)

  // 8. 세부 활동 및 기록
  if (view === 'ACTIVITY_DETAIL') {
    return (
      <div className="max-w-md mx-auto border h-[700px] bg-white flex flex-col">
        <div className="p-4 border-b font-bold flex justify-between">
          <span>양말 공 골인</span>
          <button onClick={() => setView('ACTIVITY_LIST')}>X</button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="bg-blue-50 p-4 rounded-lg mb-6 text-sm">
            <p className="font-bold text-blue-800 mb-1">대상: 6학년 | 단원: 2. 스포츠</p>
            <p className="text-gray-600">돌돌 만 양말을 거실 한쪽에 둔 바구니 안으로 발 안쪽을 이용해 정확히 밀어넣는 연습</p>
          </div>
          <div className="mb-6">
            <p className="font-bold mb-2 text-sm">참여 인증 파일</p>
            <div className="border-2 border-dashed p-8 text-center text-gray-400 rounded-lg cursor-pointer hover:bg-gray-50">파일 선택 (사진/영상)</div>
          </div>
          <div>
            <p className="font-bold mb-2 text-sm">참여 후기</p>
            <textarea 
              className="w-full border p-3 h-32 rounded text-sm" 
              placeholder="후기를 작성해 주세요..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <button 
            onClick={() => submitActivity('양말 공 골인', feedback)} 
            className="w-full bg-blue-600 text-white p-4 rounded-lg font-bold mt-6 shadow-md"
          >인증 완료</button>
        </div>
      </div>
    );
  }

  // 9. 교사용 관리 화면 (학생 기록 관리) [cite: 139, 168]
  if (view === 'TEACHER') {
    return (
      <div className="max-w-md mx-auto border h-[700px] bg-gray-50 flex flex-col">
        <div className="p-4 bg-gray-800 text-white flex justify-between items-center font-bold">
          <span>학급 활동 리포트</span>
          <button onClick={() => setView('MAIN')}>홈으로</button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-sm mb-4">
            <div className="p-3 border-b bg-gray-100 flex justify-between text-xs font-bold text-gray-500">
              <span>학생명</span><span>활동내용</span><span>상태</span>
            </div>
            {records.map(r => (
              <div key={r.id} className="p-3 border-b flex justify-between items-center text-sm">
                <span className="font-medium">{r.name}</span>
                <span className="text-gray-600">{r.activity}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">확인완료</span>
              </div>
            ))}
          </div>
          <div className="text-center p-4">
            <button className="text-blue-500 text-sm font-bold underline">기록 엑셀 다운로드</button>
          </div>
        </div>
      </div>
    );
  }
}
