import Button from "../components/button";
import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-[--var(accent-color)] text-7xl font-bold">🍰</div>
        <h1 className="text-3xl font-semibold text-gray-800">
          Wah, ada yang gosong nih!
        </h1>
        <p className="text-gray-600">
          Maaf ya, sepertinya ada kesalahan di dapur kami. Yuk kembali ke
          halaman utama dan nikmati manisnya Ogura dari Oma Opa 🍮
        </p>
        <Button type="primary" onClick={() => navigate("/")}>
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
