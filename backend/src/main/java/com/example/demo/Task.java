package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class Task {

   private final String id = UUID.randomUUID().toString();
   private String task;
   private String description;
   private TaskStatus status;
  //private String status;



}
