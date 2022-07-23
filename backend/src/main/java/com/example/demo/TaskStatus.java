package com.example.demo;

public enum TaskStatus {

    OPEN,
    IN_PROGRESS,
    DONE;

    public TaskStatus next() {
        if (this == OPEN) {
            return IN_PROGRESS;
        } else if (this == IN_PROGRESS) {
            return DONE;
        }
        throw new RuntimeException("unknown Status");
    }
}
