package by.saladukha.sct2.dto;

import by.saladukha.sct2.domain.Views;
import com.fasterxml.jackson.annotation.JsonRawValue;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Created by Zhenya Saladukha on 28.01.2020
 * project: sct2
 * mail: saladuha@nca.by
 * skype: z.saladukha
 */

@Data
@AllArgsConstructor
@JsonView(Views.Id.class)
public class WsEventDto {
    private ObjectType objectType;
    private EventType eventType;
    @JsonRawValue
    private String body;
}
