import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="hero" fill={true} />
        </div>
        Jonn Doe
      </div>
      <div className={styles.formContainer}>
      <form action="{updateUser}" className={styles.form}>
          <input type="hidden" name="id" value="{user.id}"/>
          <label>Username</label>
          <input type="text" name="username" placeholder="{user.username}" />
          <label>Email</label>
          <input type="email" name="email" placeholder="{user.email}" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="{user.phone}" />
          <label>Address</label>
          <textarea name="address" placeholder="{user.address}" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            {/* <option value={`true`} selected="{user.isAdmin}">Yes</option> */}
            {/* <option value={`false`} selected="{!user.isAdmin}">No</option> */}

            <option value={`true`} selected={true}>Yes</option>
            <option value={`false`} selected={true}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={`true`} selected={true}>Yes</option>
            <option value={`false`} selected={true}>No</option>

            {/* <option value={`true`} selected="{user.isActive}">Yes</option> */}
            {/* <option value={`false`} selected="{!user.isActive}">No</option> */}
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;