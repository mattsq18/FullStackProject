package com.genspark.ProjectFullStack.Service;

import com.genspark.ProjectFullStack.Dao.Dao;
import com.genspark.ProjectFullStack.Profile.Account;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ServiceClass implements Service{

    @Autowired
    private Dao dao;


    @Override
    public List<Account> getAccounts() {
        return this.dao.findAll();
    }

    @Override
    public Account getAccountByName(String username) {
        Optional<Account> o = this.dao.findById(username);
        Account a;
        if(o.isPresent()) {
            a = o.get();
        } else {
            throw new RuntimeException("ERR: Account" + username + " was not found!");
        }

        return a;
    }

    @Override
    public Account addAccount(Account account) {
        return this.dao.save(account);
    }

    @Override
    public Account setAccount(Account account) {
        return this.dao.save(account);
    }

    @Override
    public String deleteAccount(String username) {
        this.dao.deleteById(username);
        return "Account " + username + " has been removed.";
    }
}
