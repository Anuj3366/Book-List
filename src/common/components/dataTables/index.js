import UButton from "../button";
import style from "./style.module.css";
import Link from "next/link";

/*import {useRouter} from "next/router";
  const router = useRouter(); //(its use to push to that page , use it by adding onclick and all) 
  router.push("/addbook");*/

function DataTable({data, maxSize,onEdit}) {
    console.log("The books are to use in DataTable component", data);
    console.log("The max size to be used is", maxSize);

    const getRowsData = () => {
        return data.map((row, index) => {
            return <tr key = {index}  className={style["tr"]}>
                <td className={style["td"]}>{index + 1}</td>
                <td className={style["td"]}>{row.name}</td>
                <td className={style["td"]}>{row.author}</td>
                <td className={style["td"]}>{row.title}</td>
                <td className={style["td"]}>
                    <Link className="btn btn-primary" href="/addbook">Add Book</Link>
                    <UButton type="secondary" onclick={onEdit}>Edit</UButton>
                </td>
            </tr>
        }
        )
    };
    return (
        <table className={style["tabel"]}>
            <thead className={style["thead"]}>
                <tr className={style["tr"]}>
                    <th className={style["th"]}>Sr . No.</th>
                    <th className={style["th"]}>Name</th>
                    <th className={style["th"]}>Author</th>
                    <th className={style["th"]}>Title</th>
                    <th className={style["th"]}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {getRowsData()}
            </tbody>
        </table>
    )
}

export default DataTable;