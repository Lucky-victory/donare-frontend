import React from "react";
import { NearFooter1, NearFooter2 } from "../../../public";
import Image from "next/image";
import styles from './BeforeFooter.module.css'

import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const BeforeFooter = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-3 lg:px-6 min-h-[50vh] my-20 lg:my-40">
    
<div className={`${styles.card} flex-1 max-w-[924px] text-white lg:px-8 lg:py-7 px-4 py-6`}>
<h2 className="text-3xl my-6 lg:text-4xl text-center">The <span className="text-[var(--primary-color-tint)]">Innovative</span> way to build your DAO</h2>
<p className="text-center">Leverage technology to facilitate community-driven decision-making and raise funds for your causes.</p>
<div className="rounded-xl p-5 border-[2px] border-[#3A4052] mt-8">
  <p>

 <span className="text-[var(--primary-color-tint)] text-4xl">`&ldquo;`</span> Donare made it easy to fund my million dollar idea. <span className="text-[var(--primary-color-tint)] text-4xl">`&rdquo;`</span>
  </p>
  <div className="flex items-center mt-4 gap-5">
    <Image alt="" src={'/user-1.jpg'} width={50} height={50} className="rounded-full"/>
<div className="flex flex-col">
  <span>DeGen Mike</span>
  <span className="text-[var(--primary-color-tint)]">@degencode</span>
</div>
  </div>
</div>
</div>
<div className={`${styles.card} min-w-[300px] max-w-[624px] text-white lg:px-8 lg:py-7 px-4 py-6`}>
  <h2 className="text-3xl my-6 lg:text-4xl">How Donare Works</h2>
  <ul className={`list-none text-sm  ${styles['card-list']}` }>
    <div className={`${styles.stroke} m:h-[60%]`}>

    </div>
<li className="mb-6">The Interchain DAO we are constructing is a decentralized autonomous organization designed for supporting community causes—a concept similar to a decentralized GoFundMe platform. Its primary purpose is to aid credible individuals in raising funds for pertinent issues within the community.</li>
<li className="mb-6 mt-4">Furthermore, Donare can serve as a means to allocate funds for grants. Unlike traditional DAOs, which are often fragmented and limited in scope, we aim to create a seamlessly integrated DAO accessible to all users.</li>
<li className="mt-4">By enabling both fundraising for individuals and grant allocation, Donare strives to revolutionize the way we contribute to social causes and community development. Through its user-friendly and comprehensive approach, we envision Donare as a catalyst for positive change on a broader scale.</li>
  </ul>
</div>
      </div>
    
  );
};

export default BeforeFooter;
