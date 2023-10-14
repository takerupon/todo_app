// モックユーザーデータベース
const users: any[] = [
  {
    userinfo: {
      username: "example",
      useremail: "example@example.com"
    },
    password: "password",
  },
  // 他のユーザーを追加することも可能です
];

export default (req:any, res:any) => {
  if (req.method === "POST") {
    const { useremail, userpassword } = req.body;

    // ユーザーの認証
    const user = users.find(
      (u) => u.email === useremail && u.password === userpassword
    );

    if (user) {
      // 認証成功
      return res.status(200).json({ userinfo: user.userinfo });
    } else {
      // 認証失敗
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    // POST以外のリクエストメソッドは許可しない
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
