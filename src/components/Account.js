import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Account() {
  const userData = useSelector((state) => state.userData);
  return <div>
    {userData.unique_id}
    {userData.is_admin}
    {userData.users_name}
    {userData.users_email}
    {userData.profile_pic}
  </div>;
}
