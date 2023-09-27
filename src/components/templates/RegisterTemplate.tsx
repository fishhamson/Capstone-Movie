import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterSchema, RegisterSchemaType } from "schema";

export const RegisterTemplate = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    try {
      await axios({
        method: "POST",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: values,
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjc0NTYwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA2ODkzMjAwfQ.-axBsmkeW5i-ufzRXjqOhPEUumPXCQLTot5UjBRmtdQ",
        },
      });
      toast.success("Đăng ký thành công");
    } catch (err) {
      console.log("err: ", err);
      toast.error(err?.response?.data?.content);
    }
  };

  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-600 text-30">Đăng ký</h2>
      <div className="mt-16">
        <label htmlFor="taiKhoan">Tài khoản</label>
        <input
          id="taiKhoan"
          placeholder="Tài Khoản"
          type="text"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
          {...register("taiKhoan")}
        />
        {errors?.taiKhoan && (
          <p className="text-red-500 text-14">{errors?.taiKhoan.message}</p>
        )}
      </div>
      <div className="mt-16">
        <label htmlFor="matKhau">Mật khẩu</label>
        <input
          id="matKhau"
          placeholder="Mật khẩu"
          type="password"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
          {...register("matKhau")}
        />
        {errors?.matKhau && (
          <p className="text-red-500 text-14">{errors?.matKhau.message}</p>
        )}
      </div>
      <div className="mt-16">
        <label htmlFor="hoTen">Họ tên</label>
        <input
          id="hoTen"
          placeholder="Họ tên"
          type="text"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
          {...register("hoTen")}
        />
        {errors?.hoTen && (
          <p className="text-red-500 text-14">{errors?.hoTen.message}</p>
        )}
      </div>
      <div className="mt-16">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          type="text"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-red-500 text-14">{errors?.email.message}</p>
        )}
      </div>
      <div className="mt-16">
        <label htmlFor="soDt">Số điện thoại</label>
        <input
          id="soDt"
          placeholder="Số điện thoại"
          type="text"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
          {...register("soDt")}
        />
        {errors?.soDt && (
          <p className="text-red-500 text-14">{errors?.soDt.message}</p>
        )}
      </div>
      <div className="mt-16">
        <label htmlFor="maNhom">Mã nhóm</label>
        <input
          id="maNhom"
          placeholder="Mã nhóm"
          type="text"
          className="p-10 w-full mt-8 border-solid rounded-6 bg-[#333] "
          {...register("maNhom")}
        />
        {errors?.maNhom && (
          <p className="text-red-500 text-14">{errors?.maNhom.message}</p>
        )}
      </div>
      <button className="w-full p-16 bg-red-500 text-white mt-20 rounded-10">
        Đăng ký
      </button>
    </form>
  );
};
