import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import toast from "react-hot-toast";
//INTERNAL IMPORT
import {
  HANDLE_NETWORK_SWITCH,
  SHORTEN_ADDRESS,
  HEALTH_CARE_CONTARCT,
  PINATA_AIP_KEY,
  PINATA_SECRECT_KEY,
  UPLOAD_METADATA,
  PARSED_ERROR_MSG,
  GET_ALL_APPROVE_DOCTORS,
} from "./constants";

const DOCTOR_REGISTER_FEE = process.env.NEXT_PUBLIC_DOCTOR_REGISTER_FEE;
const PATIENT_APOINMENT_FEE = process.env.NEXT_PUBLIC_PATIENT_APPOINMENT_FEE;
const PATIENT_REGISTER_FEE = process.env.NEXT_PUBLIC_PATIENT_REGISTER_FEE;
const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //STATE VERIABLE
  const [address, setAddress] = useState();
  const [accountBalance, setAccountBalance] = useState(null);
  const [loader, setLoader] = useState(false);
  const [reCall, setReCall] = useState(0);
  const [currency, setCurrency] = useState(CURRENCY);
  const [openComponent, setOpenComponent] = useState("Home");
  const [registerDoctors, setRegisterDoctors] = useState();
  const [registeredPatient, setRegisteredPatient] = useState();

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  //CHECK WALLET CONNECT
  const CHECKI_IF_CONNECTED_LOAD = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      HANDLE_NETWORK_SWITCH();
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setAddress(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const getBalance = await provider.getBalance(accounts[0]);
        const bal = ethers.utils.formatEther(getBalance);

        setAccountBalance(bal);
        return accounts[0];
      } else {
        return "No account";
      }
    } catch (error) {
      return "not connected";
    }
  };

  //CONNECT WALLET
  const CONNECT_WALLET = async () => {
    try {
      if (!window.ethereum) return console.log("Install MateMask");
      await HANDLE_NETWORK_SWITCH();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const firstAccount = accounts[0];

      setAddress(firstAccount);
      return firstAccount;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CHECKI_IF_CONNECTED_LOAD();
  }, []);

  //-------MEDICINE------------

  //ADD MEDICINE
  const ADD_MEDICINE = async (medicine) => {
    try {
      const {
        verifyingDoctor,
        name,
        brand,
        manufacturer,
        manufacturDate,
        expiryDate,
        code,
        companyEmail,
        discount,
        manufactureAddress,
        price,
        quentity,
        currentLocation,
        mobile,
        email,
        image,
        description,
      } = medicine;
      if (
        !verifyingDoctor ||
        !name ||
        !brand ||
        !manufacturer ||
        !manufacturDate ||
        !expiryDate ||
        !code ||
        !companyEmail ||
        !discount ||
        !manufactureAddress ||
        !price ||
        !quentity ||
        !currentLocation ||
        !mobile ||
        !email ||
        !image ||
        !description
      )
        return notifyError("Data missing");

      setLoader(true);
      notifySuccess("Registrations processing... ");

      const data = JSON.stringify({
        verifyingDoctor: verifyingDoctor,
        name: name,
        brand: brand,
        manufacturer: manufacturer,
        manufacturDate: manufacturDate,
        expiryDate: expiryDate,
        code: code,
        companyEmail: companyEmail,
        discount: discount,
        manufactureAddress: manufactureAddress,
        price: price,
        quentity: quentity,
        currentLocation: currentLocation,
        mobile: mobile,
        email: email,
        image: image,
        description: description,
      });

      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        const contract = await HEALTH_CARE_CONTARCT();

        const _IPFS_URL = await UPLOAD_METADATA(data);

        const transaction = await contract.ADD_MEDICINE(
          _IPFS_URL,
          price,
          quentity,
          discount,
          currentLocation,
          {
            gasLimit: ethers.utils.hexlify(8000000),
          }
        );

        await transaction.wait();

        if (transaction.hash) {
          setLoader(false);
          notifySuccess("Medicine Registrations conplete");
          window.location.reload();
        }
      }
    } catch (error) {
      setLoader(false);
      const errorMsg = PARSED_ERROR_MSG(error);
      notifyError(errorMsg);
      console.log(error);
    }
  };

  // UPDATE_MEDICINE_LOCATION
  const UPDATE_MEDICINE_LOCATION = async (updateMedicine) => {
    const { medicineID, update } = updateMedicine;
    try {
      if (!medicineID || !update) return notifyError("Data missing");

      setLoader(true);
      notifySuccess("Updating medicine location... ");

      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        const contract = await HEALTH_CARE_CONTARCT();

        const transaction = await contract.UPDATE_MEDICINE_LOCATION(
          Number(medicineID),
          update,
          {
            gasLimit: ethers.utils.hexlify(8000000),
          }
        );

        await transaction.wait();

        if (transaction.hash) {
          setLoader(false);
          notifySuccess("Location updated successfully");
          window.location.reload();
        }
      }
    } catch (error) {
      setLoader(false);
      const errorMsg = PARSED_ERROR_MSG(error);
      notifyError(errorMsg);
      console.log(error);
    }
  };
}