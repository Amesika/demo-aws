package com.amesika.quizzapi.model;

import com.amesika.quizzapi.entities.Customer;

import org.springframework.data.repository.CrudRepository;

public interface CustomerDAO extends CrudRepository<Customer, Long> {

}
