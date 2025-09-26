import { useEffect, useState } from "react";
import Loading from "@/components/layout/Loading";
import VisualSec from "@/components/sections/VisualSec";

export default function Home() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  return (
    <>
      <Loading setLoading={setLoading}></Loading>
      {
        loading &&
        <VisualSec></VisualSec>
      }
    </>
  );
}
