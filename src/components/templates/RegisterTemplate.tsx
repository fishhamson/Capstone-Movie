export const RegisterTemplate = () => {
  return (
    <div className="text-white">
      <h2 className="font-600 text-30">Đăng ký</h2>
      <div className="mt-16">
        <label htmlFor="">Tài khoản</label>
        <input
          id="taikhoan"
          placeholder="Tài Khoản"
          type="text"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
        />
      </div>
    </div>
  );
};
