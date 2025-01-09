import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../Elements/Card";

const CardBill = () => {
  const [bills, setBills] = useState([]); // Menyimpan daftar tagihan
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.error("No refresh token found.");
        return;
      }

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      if (response.data && response.data.data && response.data.data.length > 0) {
        setBills(response.data.data); // Menyimpan semua tagihan
      } else {
        console.error("Invalid data format:", response.data);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.error("Session expired. Redirecting to login...");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          console.error("API Error:", error.response);
        }
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      title="Bills"
      desc={
        <div className="relative" style={{ minHeight: "300px" }}>
          <div>
            {bills.map((bill) => (
              <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
                <div className="flex">
                  {/* Tanggal (bulan dan hari) */}
                  <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                  </div>
                  {/* Logo, Nama, dan Last Charge */}
                  <div>
                    <img
                      className="h-6"
                      src={`/Images/${bill.logo}`}
                      alt={bill.name}
                    />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">
                      Last Charge - {bill.lastCharge}
                    </span>
                  </div>
                </div>
                {/* Jumlah Tagihan */}
                <div className="flex place-content-center flex-col">
                  <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default CardBill;
