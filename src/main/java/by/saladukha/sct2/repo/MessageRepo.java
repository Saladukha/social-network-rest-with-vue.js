package by.saladukha.sct2.repo;

import by.saladukha.sct2.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Zhenya Saladukha on 22.01.2020
 * project: sct2
 * mail: saladuha@nca.by
 * skype: z.saladukha
 */

public interface MessageRepo extends JpaRepository<Message, Long> {
}
