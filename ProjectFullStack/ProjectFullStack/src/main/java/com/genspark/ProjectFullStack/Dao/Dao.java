package com.genspark.ProjectFullStack.Dao;

import com.genspark.ProjectFullStack.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Dao extends JpaRepository<Account,String> {
    //&&//
}
