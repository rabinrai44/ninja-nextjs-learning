import Link from "next/link";
import React, { useReducer } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    console.log("use effect run...");
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
      console.log('redirecting to homepage....');
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
