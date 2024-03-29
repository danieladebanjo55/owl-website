import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";


const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed  top-0 left-0 w-full h-[100dvh] bg-black bg-opacity-90 flex justify-center items-center z-50">
          <HashLoader color="#FFFF00" loading={loading} size={50} className="flex items-center justify-center absolute left-5"/>

        </div>
      ) : null}
    </>
  );
};

export default LoadingScreen;
