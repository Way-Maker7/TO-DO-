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
}
