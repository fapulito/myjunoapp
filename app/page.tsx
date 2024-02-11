"use client";

import { useEffect, useState } from "react";
import { type Doc, initJuno, setDoc } from "@junobuild/core-peer";

type Record = {
  hello: string;
};

export default function Home() {
  const [record, setRecord] = useState<Doc<Record> | undefined>(undefined);

  // TODO: Replace 'satelliteId' with your actual satellite ID
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "tnmga-naaaa-aaaal-adr7a-cai",
      }))();
  }, []);

  const insert = async () => {
    const doc = await setDoc({
      collection: "demo",
      doc: {
        key: `my-key-${new Date().getTime()}`,
        data: {
          hello: "world",
        },
      },
    });

    setRecord(doc);
  };

  return (
    <>
      <button onClick={insert}>Click Button to in document</button>
      {record !== undefined && <span>Key: {record.key}</span>}
    </>
  );
}