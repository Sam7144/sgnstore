import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Store } from "@/utils/Store";
import CheckOutWizard from "@/components/CheckOutWizard";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Footer from "@/components/footer";
export default function ShippingScreen() {
const {
  handleSubmit,
  register,
  formState: { errors },
  setValue,
} = useForm();

const { state, dispatch } = useContext(Store);
const { cart } = state;
const { shippingAddress } = cart;
const router = useRouter();

useEffect(() => {
  setValue('fullName', shippingAddress.fullName);
  setValue('Address', shippingAddress.Address);
  setValue('City', shippingAddress.City);
  setValue('postalCode', shippingAddress.postalCode);
  setValue('Country', shippingAddress.Country);
}, [setValue, shippingAddress]);

const submitHandler = ({ fullName, Address, City, postalCode, Country }) => {
  dispatch({
    type: 'SHIPPING_ADDRESS',
    payload: { fullName, Address, City, postalCode, Country },
  });
  Cookies.set(
    'cart',
    JSON.stringify({
      ...cart,
      shippingAddress: {
        fullName,
        Address,
        City,
        postalCode,
        Country,
      },
    })
  );

  router.push('/payment');
  }
  return (
    <>
      <h1 className="mtop"></h1>
      <CheckOutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please enter full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            {...register("Address", {
              required: "Please enter address",
              minLength: { value: 3, message: "Address is more than 2 chars" },
            })}
          />
          {errors.Address && (
            <div className="text-red-500">{errors.Address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            {...register("City", {
              required: "Please enter city",
            })}
          />
          {errors.City && (
            <div className="text-red-500 ">{errors.City.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode"
            {...register("postalCode", {
              required: "Please enter postal code",
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country"
            {...register("Country", {
              required: "Please enter country",
            })}
          />
          {errors.Country && (
            <div className="text-red-500 ">{errors.Country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </>
  );
}


