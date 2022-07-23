package com.example.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class KanbanRepositoryTest {

    @Test
    void shouldReturnTasks(){
        var kanbanRepository = new KanbanRepository();


        kanbanRepository.save(new Task("Task1", "Desc 1", TaskStatus.OPEN));

        Assertions.assertThat(kanbanRepository.findAll()).hasSize(1);
    }

    @Test
    void shouldDelete(){
        //Given
        var kanbanRepository = new KanbanRepository();
        Task task = new Task("Task1", "Desc1", TaskStatus.OPEN);
        kanbanRepository.save(task);

        //When
        kanbanRepository.deleteById(task.getId());

        //Then
        Assertions.assertThat(kanbanRepository.findAll().isEmpty());


    }

}
