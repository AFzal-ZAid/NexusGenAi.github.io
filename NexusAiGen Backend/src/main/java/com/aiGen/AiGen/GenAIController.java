package com.aiGen.AiGen;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class GenAIController {

    private final ChatService chatService;
    private final ImageService imageService;
    private final RecipeService recipeService;

    // Constructor Injection
    public GenAIController(ChatService chatService,
                           ImageService imageService,
                           RecipeService recipeService) {

        this.chatService = chatService;
        this.imageService = imageService;
        this.recipeService = recipeService;
    }

    // Chat API
    @GetMapping("/ask-ai")
    public String getResponse(@RequestParam String prompt) {
        return chatService.getResponse(prompt);
    }

    // Chat API with Options
    @GetMapping("/ask-ai-options")
    public String getResponseOptions(@RequestParam String prompt) {
        return chatService.getResponseOptions(prompt);
    }

    // Image Generation API
    @GetMapping("/generate-image")
    public List<String> generateImages(
            HttpServletResponse response,
            @RequestParam String prompt,
            @RequestParam(defaultValue = "hd") String quality,
            @RequestParam(defaultValue = "1") int n,
            @RequestParam(defaultValue = "1024") int width,
            @RequestParam(defaultValue = "1024") int height
    ) throws IOException {

        ImageResponse imageResponse =
                imageService.generateImage(prompt, quality, n, width, height);

        return imageResponse.getResults()
                .stream()
                .map(result -> result.getOutput().getUrl())
                .toList();
    }

    // Recipe Generator API
    @GetMapping("/recipe-creator")
    public String recipeCreator(
            @RequestParam String ingredients,
            @RequestParam(defaultValue = "any") String cuisine,
            @RequestParam(defaultValue = "") String dietaryRestriction
    ) {

        return recipeService.createRecipe(
                ingredients,
                cuisine,
                dietaryRestriction
        );
    }
}