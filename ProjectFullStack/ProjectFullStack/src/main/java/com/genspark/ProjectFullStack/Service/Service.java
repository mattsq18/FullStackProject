package com.genspark.ProjectFullStack.Service;

import java.util.List;
import com.genspark.ProjectFullStack.Profile.Account;

public interface Service {
    List<Account> getAccounts();
    Account getAccountByName(String username);
    Account addAccount(Account account);
    Account setAccount(Account account);
    String deleteAccount(String username);
}
