import { useEffect, useState } from "react";
import NewUser from "./NewUser";
import Loading from "./Loading";

const Crud = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-mysql-test.vercel.app/api/data"
        );
        const result = await response.json();
        setData(result); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://api-mysql-test.vercel.app/api/data/${userId}`,
        {
          method: "DELETE",
        }
      );
  
      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }

      setData(data.filter((item) => item.id_user !== userId));
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-9/12 mx-auto pt-10">
      <>
        <NewUser />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombres
                </th>
                <th scope="col" className="px-6 py-3">
                  Apellidos
                </th>
                <th scope="col" className="px-6 py-3">
                  Edad
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="flex justify-end">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id_user}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id_user}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.last_name}</td>
                  <td className="px-6 py-4">{item.age}</td>
                  <td className="px-6 py-4 text-right flex gap-4 justify-end">
                    <a
                      href={`/${item.id_user}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Editar
                    </a>
                    <button
                      onClick={() => deleteUser(item.id_user)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </section>
  );
};

export default Crud;