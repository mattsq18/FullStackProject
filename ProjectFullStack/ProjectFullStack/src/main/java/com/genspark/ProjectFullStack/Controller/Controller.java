package com.genspark.ProjectFullStack.Controller;

import com.genspark.ProjectFullStack.Entity.Account;
import com.genspark.ProjectFullStack.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private Service service;

    @GetMapping("/")
    public String home(){
        return "<HTML><H1> Hello World!</H1></HTML>";
    }

    @GetMapping("/accounts")
    public List<Account> getAccounts() {
        return this.service.getAccounts();
    }

    @GetMapping("/accounts/{name}")
    public Account getSpecificAccount(@PathVariable String name) {
        return this.service.getAccountByName(name);
    }

    @PutMapping("/Account")
    public Account setAccount(@RequestBody Account Account) {
        return this.service.setAccount(Account);
    }

    @PostMapping("/accounts")
    public Account addAccount(@RequestBody Account Account) {
        return this.service.addAccount(Account);
    }

    @DeleteMapping("/accounts/{name}")
    public String removeAccount(@PathVariable String name) {
        return this.service.deleteAccount(name);
    }
    
}
