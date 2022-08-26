import Link from "next/link";
import { useEffect, useState } from "react";

export default function Postcontent(props) {
  let [user, setUser] = useState({
    email: "",
    id: "",
  });

  useEffect(() => {
    fetch(`/api/user/${props.author}`).then((res) =>
      res.json().then((data) => {

        console.log(data);
        setUser(data);
      })
    );
  }, [props.author]);
  {
    return (
      <div className="group bg-white rounded-xl shadow-xl px-8 py-12 space-y-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">{props.title}</h3>
        <p>{props.content}</p>
    
        by{" "}
        <Link href={`/profile/${user.id}`}>
          <a className="text-blue-300 text-lg">{user.email}</a>
        </Link>
      </div>
    );
  }
}
