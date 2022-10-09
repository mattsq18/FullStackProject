package com.genspark.ProjectFullStack.Entity;

import javax.persistence.*;

@Entity
@Table(name = "Account")
public class Account {

    @Id
    @Column(name = "AccountName")
    private String username; //Username of account
    private String password; //Password of account
    private boolean AdminStatus; //If user is administrator or not

    //empty constructor
    public Account() {}


    //constructor
    public Account(String username, String password, boolean adminStatus) {
        this.username = username;
        this.password = password;
        AdminStatus = adminStatus;
    }


    //Getters and Setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAdminStatus() {
        return AdminStatus;
    }

    public void setAdminStatus(boolean adminStatus) {
        AdminStatus = adminStatus;
    }


    @Override
    public String toString() {
        return "Account{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", AdminStatus=" + AdminStatus +
                '}';
    }
}
