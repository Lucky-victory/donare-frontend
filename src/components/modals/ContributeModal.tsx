import React, { ChangeEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Input from "@/components/common/Input";
import { useContractRead } from "wagmi";
import { ABI } from "@/constants/abi";
import { toast } from "react-hot-toast";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { ethers } from "ethers";
import handleConnector from '../../utils/Connector';
import isEmpty from "just-is-empty";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  campaign: any;
}

const ContributeModal = ({ isOpen, closeModal, campaign }: Props) => {
  const [canShowStream, setCanShowStream] = React.useState(false);
  // const [memo, setMemo] = React.useState("");
  const [formData,setFormData] = React.useState(!canShowStream?{amount:'',message:''}:{amount:'',message:'',streamRate:'',startDate:0,endDate:0});
const handleInputChange=(evt:ChangeEvent<HTMLInputElement>)=>{
const {name,value}=evt.target;
setFormData((prev)=>({...prev,[name]:value}));
}
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isEmpty(formData.amount) || isEmpty(formData.message)) {toast.error("Please fill all fields");

    // console.log({amount,memo});
    
    return
  }
    try {
      const configure = await prepareWriteContract({
        address: campaign as `0x${string}`,
        abi: ABI.campaign,
        functionName: "donate",
        args: [formData?.message],
        overrides: {
          value: ethers.utils.parseEther(formData?.amount),
          // gasLimit: 
        },
      });
      const data = await writeContract({
        ...configure,

      });
      console.log(data);
      closeModal();

      toast.success(`Thank you for your contribution. View on explorer: https://testnet.bscscan.com/tx/${data.hash}`);
    } catch (error: any) {
      console.log(error);
      toast.error(error);
    }
  };
function showFieldsForFundStream(){
setCanShowStream(!canShowStream)
}
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#5d5d5e] bg-opacity-40 backdrop-blur" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto sat-norm">
          <div className="flex mt-20 items-center justify-center p-4 text-center gap-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col gap-2 min-h-[300px] max-w-xl transform overflow-hidden rounded-2xl bg-[#101524] px-6 py-6 lg:py-10 text-left align-middle shadow-xl transition-all">
                <div className="w-full flex items-start justify-between">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg lg:text-3xl font-medium leading-6 text-lime"
                    >
                      Contribute
                    </Dialog.Title>
                    <p className="text-[#8E8F94]">
                      You are about to donate to this campaign
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-full p-2 focus:outline-none"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-6 text-lime" />
                  </button>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 mt-4"
                >
                  {/* Amount */}
                  <Input
                    label="Amount"
                    type="number"
                    name="amount"
                    placeholder="enter an amount in BNB"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />

                  {/* Short Message */}
                  <Input
                    label="Short Message"
                    type="text"
                    
                    name="message"
                    placeholder="Leave a short message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />

                  {/* Button */}
                  <div className="flex justify-between items-center gap-4">

                  <button
                    type="submit"
                    className="w-full bg-lime text-black rounded-md py-3 font-medium my-6"
                    >
                    Give
                  </button>
                  <button
                    type="button" onClick={()=>showFieldsForFundStream()}
                    className="w-full border-2 border-[var(--primary-color-tint)] text-[var(--primary-color-tint)] rounded-md py-3 font-medium my-6"
                    >
                    Stream Funds
                  </button>
                    </div>
                    {canShowStream &&
                    <div className="">
 <Input
                    label="Stream rate"
                    type="number"
                    
                    name="streamRate"
                    placeholder="0.01      WETH/mon"
                    value={formData.streamRate}
                    onChange={handleInputChange}
                  />
                  <div className="my-4">

                    <span className="font-medium text-white">
     Duration
      </span>
      <div className="flex gap-4 items-center my-2">
      {[{text:'1 week'},{text:'2 weeks'},{text:'1 month'}].map((item,i)=>(
      <label className="text-white rounded-full hover:border-[var(--primary-color-tint)] border-2 px-4 py-[1px] border-gray-500" htmlFor={'inp'+i} key={i}><input hidden type="radio" name="endDate" id={'inp'+i}/>{item?.text}</label>
      ))}
      </div>
                  </div>
                    <button
                    type="submit"
                    className="w-full bg-lime text-black rounded-md py-3 font-medium mt-6"
                    >
                    Complete
                  </button>
                    </div>
                    }
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContributeModal;
