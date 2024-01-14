package com.narstudio.studentscourse.student.model;

import com.narstudio.studentscourse.student.enums.GenderEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@AllArgsConstructor
@Getter
public class Student {

    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final GenderEnum gender;
}
