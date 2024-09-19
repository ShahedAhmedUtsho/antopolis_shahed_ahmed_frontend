'use client'

import MainRoot from "@/Components/Main/MainRoot";
import Provider from "@/Provider/Provider";
import { split } from "postcss/lib/list";
import { useEffect, useState } from "react";



export default function Home() {

  return (
    <Provider>
      <MainRoot />
    </Provider>



  );
}
