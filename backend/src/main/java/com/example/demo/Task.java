package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Task {

   private final String id = UUID.randomUUID().toString();
   private String task;
   private String description;

   private TaskStatus status;

   public Task(String task, String description, TaskStatus status) {
      this.task = task;
      this.description = description;
      this.status = status;
   }


   public void setStatus(TaskStatus status){
      this.status = status;

   }


}
