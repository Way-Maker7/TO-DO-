package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data

public class Task {

   private final String id = UUID.randomUUID().toString();
   private String task;
   private String description;

   public Task(String task, String description, TaskStatus status) {
      this.task = task;
      this.description = description;
      this.status = status;
   }

   private TaskStatus status;

   public void setStatus(TaskStatus status){
      this.status = status;
   }

}
