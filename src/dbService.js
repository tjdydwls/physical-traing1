// 데이터베이스 서비스 (Mock & Firebase 전환 가능)
// 현재는 Firebase 설정 없이도 바로 작동하도록 Mock(LocalStorage) 모드로 설정되어 있습니다.

const IS_MOCK = true; // 나중에 Firebase 연동 시 false로 바꾸면 됩니다.

// --- Mock Service (브라우저 저장소 사용) ---
const mockAuth = {
  currentUser: JSON.parse(localStorage.getItem('mockUser')) || null,
  onAuthStateChanged: (callback) => {
    const user = JSON.parse(localStorage.getItem('mockUser'));
    callback(user);
    return () => {};
  },
  signIn: async (email, password) => {
    const users = JSON.parse(localStorage.getItem('mock_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('mockUser', JSON.stringify(user));
      window.location.reload();
      return { user };
    }
    throw new Error("아이디 또는 비밀번호가 틀립니다.");
  },
  signUp: async (email, password, name, role) => {
    const users = JSON.parse(localStorage.getItem('mock_users') || '[]');
    if (users.find(u => u.email === email)) throw new Error("이미 존재하는 이메일입니다.");
    
    const newUser = { uid: 'u' + Date.now(), email, password, name, role };
    users.push(newUser);
    localStorage.setItem('mock_users', JSON.stringify(users));
    localStorage.setItem('mockUser', JSON.stringify(newUser));
    window.location.reload();
    return { user: newUser };
  },
  signOut: async () => {
    localStorage.removeItem('mockUser');
    window.location.reload();
  }
};

const mockDb = {
  getRecords: async (userRole, userId) => {
    const records = JSON.parse(localStorage.getItem('mock_records') || '[]');
    if (userRole === 'teacher') return records;
    return records.filter(r => r.studentId === userId);
  },
  addRecord: async (record) => {
    const records = JSON.parse(localStorage.getItem('mock_records') || '[]');
    const newRecord = { id: 'r' + Date.now(), ...record, date: new Date().toLocaleDateString() };
    records.unshift(newRecord);
    localStorage.setItem('mock_records', JSON.stringify(records));
    return newRecord;
  }
};

// --- Export Service ---
export const dbService = {
  auth: mockAuth,
  db: mockDb,
  isDemo: IS_MOCK
};
