import React, { useState, useEffect, useRef } from 'react';
import { dbService } from './dbService';

// 메인 앱 컴포넌트
export default function App() {
  const [view, setView] = useState('LOGIN');
  const [userRole, setUserRole] = useState(null); // 'student' or 'teacher'
  const [user, setUser] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const fileInputRef = useRef(null);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedFileData, setSelectedFileData] = useState(null); // Base64 data for demo preview

  // Auth Observer
  useEffect(() => {
    dbService.auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserRole(currentUser.role);
        setName(currentUser.name);
        setView('MAIN');
      } else {
        setUser(null);
        setView('LOGIN');
      }
      setLoading(false);
    });
  }, []);

  const fetchRecords = async () => {
    if (!user) return;
    try {
      const data = await dbService.db.getRecords(userRole, user.uid);
      setRecords(data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  useEffect(() => {
    if (user && (view === 'TEACHER' || view === 'MAIN')) {
      fetchRecords();
    }
  }, [view, userRole, user]);

  const handleLogin = async () => {
    if (!email || !password) return alert("이메일과 비밀번호를 입력해주세요.");
    try {
      await dbService.auth.signIn(email, password);
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password || !name) return alert("모든 정보를 입력해주세요.");
    try {
      await dbService.auth.signUp(email, password, name, userRole);
      alert("회원가입이 완료되었습니다!");
    } catch (error) {
      alert("회원가입 실패: " + error.message);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFileData({
          name: file.name,
          data: reader.result // Data URL
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const submitActivity = async (activityName, feedbackText) => {
    if (!user) return;
    try {
      await dbService.db.addRecord({
        studentId: user.uid,
        name: name,
        activity: activityName,
        feedback: feedbackText,
        file: selectedFileData,
        status: '완료'
      });
      alert('활동 기록이 제출되었습니다!');
      setFeedback('');
      setSelectedFileData(null);
      setView('MAIN');
    } catch (error) {
      alert("제출 실패: " + error.message);
    }
  };

  const openRecordDetail = (record) => {
    setSelectedRecord(record);
    setView('RECORD_DETAIL');
  };

  const Header = () => (
    <div className="bg-blue-600 text-white p-4 text-center font-bold shadow-md">
      <div className="flex justify-between items-center max-w-md mx-auto mb-1">
        <p className="text-xs opacity-80">라이프 스킬을 통한</p>
        {user && <button onClick={() => dbService.auth.signOut()} className="text-xs bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded transition-colors">로그아웃</button>}
      </div>
      <h1 className="text-xl">피지컬 리터러시 기르기</h1>
    </div>
  );

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium">로딩 중...</p>
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
            <input className="w-full border-b-2 p-3 outline-none" placeholder="이메일 주소" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full border-b-2 p-3 outline-none" type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin} className="bg-blue-600 text-white p-4 rounded-lg font-bold shadow-lg">로그인</button>
          <button onClick={() => setView('TYPE')} className="text-blue-500 font-medium text-sm hover:underline">회원가입</button>
        </div>
      </div>
    );
  }

  // 2. 가입 유형 선택
  if (view === 'TYPE') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="p-8 flex-1">
          <h2 className="text-xl font-bold mb-8 text-center">가입 유형 선택</h2>
          <div className="grid grid-cols-2 gap-6">
            <div onClick={() => { setUserRole('student'); setView('TERMS'); }} className="bg-white border-2 p-8 rounded-2xl flex flex-col items-center cursor-pointer transition-all">
              <span className="text-5xl mb-4">👤</span>
              <p className="font-bold">학생</p>
            </div>
            <div onClick={() => { setUserRole('teacher'); setView('TERMS'); }} className="bg-white border-2 p-8 rounded-2xl flex flex-col items-center cursor-pointer transition-all">
              <span className="text-5xl mb-4">👨‍🏫</span>
              <p className="font-bold">선생님</p>
            </div>
          </div>
          <button onClick={() => setView('LOGIN')} className="mt-12 w-full p-3 text-gray-400">이전으로</button>
        </div>
      </div>
    );
  }

  // 3. 약관 동의 (생략 가능하지만 유지)
  if (view === 'TERMS') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">이용약관 동의</h2>
        <div className="flex-1 border rounded-lg p-4 text-sm text-gray-600 bg-gray-50 mb-6">동의가 필요한 약관 내용입니다.</div>
        <button onClick={() => setView('AUTH')} className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold">다음 단계</button>
      </div>
    );
  }

  // 4. 본인 인증
  if (view === 'AUTH') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white p-8 flex flex-col items-center justify-center text-center shadow-xl">
        <span className="text-6xl mb-6">📱</span>
        <h2 className="text-2xl font-bold mb-2">본인 인증</h2>
        <button onClick={() => setView('SIGNUP')} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold shadow-xl mt-10">인증하기</button>
      </div>
    );
  }

  // 5. 회원가입 정보 입력
  if (view === 'SIGNUP') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white p-8 flex flex-col shadow-xl">
        <h2 className="text-2xl font-bold mb-8">정보 입력 ({userRole === 'student' ? '학생' : '선생님'})</h2>
        <div className="space-y-6 flex-1">
          <input className="w-full border-2 p-3 rounded-xl" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full border-2 p-3 rounded-xl" placeholder="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full border-2 p-3 rounded-xl" type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignUp} className="w-full bg-green-500 text-white p-5 rounded-2xl font-bold shadow-lg">가입 완료</button>
      </div>
    );
  }

  // 6. 메인 화면
  if (view === 'MAIN') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl">
        <Header />
        <div className="p-8 flex-1 overflow-y-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <p className="text-xl"><b>{name}</b>님, 환영합니다! 👋</p>
          </div>
          
          <div className="grid gap-4 mb-8">
            <button onClick={() => setView('ACTIVITY_LIST')} className="p-6 bg-white border-2 border-blue-100 hover:border-blue-500 rounded-2xl text-left flex justify-between items-center transition-all group">
              <div>
                <p className="font-bold text-lg text-blue-600">운동 시작하기 →</p>
                <p className="text-sm text-gray-500">학년별 맞춤 활동</p>
              </div>
              <span className="text-3xl">🏃‍♂️</span>
            </button>
            
            {userRole === 'teacher' && (
              <button onClick={() => setView('TEACHER')} className="p-6 bg-gray-800 text-white rounded-2xl text-left flex justify-between items-center group">
                <div>
                  <p className="font-bold text-lg">학급 활동 리포트 →</p>
                  <p className="text-sm text-gray-400">학생들의 기록 확인</p>
                </div>
                <span className="text-3xl">📋</span>
              </button>
            )}
          </div>

          {userRole === 'student' && (
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex justify-between items-center">나의 최근 활동</h3>
              {records.length === 0 ? (
                <div className="bg-white p-10 rounded-2xl text-center text-gray-400 text-sm border-2 border-dashed">아직 기록이 없습니다.</div>
              ) : (
                <div className="space-y-3">
                  {records.map((r) => (
                    <div key={r.id} onClick={() => openRecordDetail(r)} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 cursor-pointer hover:bg-blue-50 transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-gray-700">{r.activity}</span>
                        <span className="text-[10px] text-gray-400">{r.date}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1">{r.feedback}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 7. 활동 리스트
  if (view === 'ACTIVITY_LIST') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white shadow-xl">
        <div className="p-5 border-b flex items-center gap-4 bg-white sticky top-0 z-10">
          <button onClick={() => setView('MAIN')} className="text-2xl">←</button>
          <span className="font-bold text-lg">활동 선택</span>
        </div>
        <div className="p-6 space-y-3">
          {['운동 체력 기르기', '축구형 게임', '배구형 게임', '높이뛰기 도전', '댄스 스포츠'].map((act, i) => (
            <div key={i} onClick={() => setView('ACTIVITY_DETAIL')} className="p-5 border rounded-2xl hover:bg-blue-50 cursor-pointer flex justify-between items-center transition-all">
              <span className="font-medium text-gray-700">{act}를 알아보아요</span>
              <span className="text-gray-300 text-xl">›</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 8. 활동 상세 기록 (제출 화면)
  if (view === 'ACTIVITY_DETAIL') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white flex flex-col shadow-xl">
        <div className="p-5 border-b font-bold flex justify-between items-center">
          <span>활동 기록하기</span>
          <button onClick={() => setView('ACTIVITY_LIST')} className="text-gray-400 text-2xl">×</button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3">인증 파일 (사진/영상)</label>
            <div onClick={handleFileClick} className={`border-2 border-dashed p-10 text-center rounded-2xl cursor-pointer ${selectedFileData ? 'border-blue-500 bg-blue-50' : 'border-gray-200 text-gray-400'}`}>
              <span className="text-4xl block mb-2">{selectedFileData ? '✅' : '📸'}</span>
              {selectedFileData ? selectedFileData.name : '파일 선택'}
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3">활동 후기</label>
            <textarea className="w-full border-2 p-4 h-40 rounded-2xl outline-none resize-none" placeholder="내용을 입력하세요..." value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
          </div>
          <button onClick={() => submitActivity('운동 활동', feedback)} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold shadow-xl">제출하기</button>
        </div>
      </div>
    );
  }

  // 9. 기록 상세 보기 화면 (추가된 기능)
  if (view === 'RECORD_DETAIL' && selectedRecord) {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-white flex flex-col shadow-xl">
        <div className="p-5 border-b font-bold flex items-center gap-4">
          <button onClick={() => setView(userRole === 'teacher' ? 'TEACHER' : 'MAIN')} className="text-xl">←</button>
          <span>활동 기록 상세</span>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="mb-6">
            <span className="text-xs text-blue-500 font-bold uppercase tracking-wider">Activity</span>
            <h2 className="text-2xl font-bold text-gray-800">{selectedRecord.activity}</h2>
            <p className="text-sm text-gray-400 mt-1">{selectedRecord.date} | {selectedRecord.name}</p>
          </div>

          {selectedRecord.file && (
            <div className="mb-8">
              <p className="text-sm font-bold text-gray-700 mb-3">인증 사진</p>
              {selectedRecord.file.data.startsWith('data:image') ? (
                <img src={selectedRecord.file.data} alt="인증사진" className="w-full rounded-2xl shadow-sm border" />
              ) : (
                <div className="bg-gray-100 p-6 rounded-2xl text-center text-gray-500 text-sm">
                  🎥 영상 파일: {selectedRecord.file.name}
                </div>
              )}
            </div>
          )}

          <div className="mb-8">
            <p className="text-sm font-bold text-gray-700 mb-3">활동 후기</p>
            <div className="bg-gray-50 p-5 rounded-2xl text-gray-700 leading-relaxed whitespace-pre-wrap border border-gray-100 italic">
              "{selectedRecord.feedback}"
            </div>
          </div>
          
          <button onClick={() => setView(userRole === 'teacher' ? 'TEACHER' : 'MAIN')} className="w-full bg-gray-100 text-gray-600 p-4 rounded-xl font-bold hover:bg-gray-200 transition-colors mt-10">목록으로 돌아가기</button>
        </div>
      </div>
    );
  }

  // 10. 교사용 리포트
  if (view === 'TEACHER') {
    return (
      <div className="max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl">
        <div className="p-5 bg-gray-800 text-white flex justify-between items-center font-bold sticky top-0 z-10 shadow-lg">
          <span>학급 활동 리포트</span>
          <button onClick={() => setView('MAIN')} className="text-xs bg-gray-700 px-3 py-1.5 rounded-lg">홈으로</button>
        </div>
        <div className="p-5 flex-1 overflow-y-auto">
          {records.length === 0 ? (
            <div className="text-center py-20 text-gray-400">기록이 없습니다.</div>
          ) : (
            <div className="space-y-4">
              {records.map((r) => (
                <div key={r.id} onClick={() => openRecordDetail(r)} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:bg-blue-50 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-bold text-gray-800">{r.name}</span>
                    <span className="text-[10px] text-gray-400">{r.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">{r.activity}</p>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">"{r.feedback}"</p>
                  {r.file && <div className="mt-2 text-[10px] text-blue-400">📎 첨부파일 있음</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
