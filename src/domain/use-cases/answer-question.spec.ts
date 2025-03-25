import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./AnswerQuestion";
import { AnswersRepository } from "../repositories/AnswersRepository";

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {},
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);
  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "2",
    content: "any_content",
  });

  expect(answer.content).toBe("any_content");
});
