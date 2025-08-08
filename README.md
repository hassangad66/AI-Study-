<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AI Study Assistant</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">

  <!-- Header -->
  <header class="bg-blue-600 text-white py-6 shadow">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl font-bold">📚 AI Study Assistant</h1>
      <p class="mt-2">Upload, Summarize, Create Quizzes & Flashcards — Instantly</p>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto p-6 space-y-8">

    <!-- Upload Section -->
    <section class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">1️⃣ Upload Your Content</h2>

      <!-- PDF Upload -->
      <label class="block mb-4">
        <span class="text-gray-700 font-medium">Upload PDF</span>
        <input
          type="file"
          accept="application/pdf"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          id="pdfUpload"
        />
      </label>

      <!-- YouTube Link -->
      <label class="block mb-4">
        <span class="text-gray-700 font-medium">YouTube Link</span>
        <input
          type="url"
          placeholder="https://youtube.com/watch?v=..."
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          id="youtubeLink"
        />
      </label>
    </section>

    <!-- Feature Selection -->
    <section class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">2️⃣ Choose What You Want</h2>
      <select
        id="featureSelect"
        class="block w-full border border-gray-300 rounded-md p-2"
      >
        <option value="">-- Select Feature --</option>
        <option value="summary">Generate Summary</option>
        <option value="quiz">Create Quiz</option>
        <option value="flashcards">Make Flashcards</option>
      </select>
    </section>

    <!-- User Message (Optional) -->
    <section class="bg-white p-6 rounded-lg shadow">
      <label class="block">
        <span class="text-gray-700 font-medium">Additional Notes (optional)</span>
        <textarea
          id="userMessage"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          rows="3"
          placeholder="Any specific instructions for the AI?"
        ></textarea>
      </label>
    </section>

    <!-- Generate Button -->
    <div class="text-center">
      <button
        id="generateBtn"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        🚀 Generate
      </button>
    </div>

    <!-- Result Section -->
    <section id="resultSection" class="bg-white p-6 rounded-lg shadow hidden">
      <h2 class="text-xl font-semibold mb-4">✨ Your Result</h2>
      <div id="resultContent" class="text-gray-700">Processing...</div>
    </section>

  </main>

  <!-- Script -->
  <script>
    document.getElementById("generateBtn").addEventListener("click", function() {
      const feature = document.getElementById("featureSelect").value;
      const resultSection = document.getElementById("resultSection");
      const resultContent = document.getElementById("resultContent");

      if (!feature) {
        alert("Please select a feature first.");
        return;
      }

      resultSection.classList.remove("hidden");
      resultContent.textContent = "⏳ Generating " + feature + "... (demo mode)";

      // Simulate AI delay
      setTimeout(() => {
        if (feature === "summary") {
          resultContent.textContent = "📄 Here's your mock summary: Lorem ipsum dolor sit amet...";
        } else if (feature === "quiz") {
          resultContent.textContent = "📝 Sample Quiz:\n1. Question one?\n2. Question two?";
        } else if (feature === "flashcards") {
          resultContent.textContent = "💡 Flashcards:\n- Term 1: Definition\n- Term 2: Definition";
        }
      }, 1500);
    });
  </script>
</body>
</html>
