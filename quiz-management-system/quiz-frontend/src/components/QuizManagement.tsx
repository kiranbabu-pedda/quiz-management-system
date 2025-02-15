import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QuizManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz Management System</h1>
      <Card>
        <CardContent className="p-4">
          <p>Welcome to the Quiz Management System. Create and manage quizzes easily.</p>
          <Button className="mt-4">Create New Quiz</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizManagement;
