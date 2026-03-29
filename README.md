# VisionLanguageModel-VLM

CLIP-Based Image–Text Embedding and Similarity System

# Overview

This project implements a multimodal embedding pipeline using CLIP to encode images and text into a shared vector space. It enables semantic similarity search, zero-shot classification, and cross-modal retrieval.

# Capabilities

Image–text similarity scoring
Text-based image retrieval
Zero-shot classification
Embedding generation for downstream tasks
Batch inference support

# Architecture

Components:

Text Encoder → Transformer-based encoder
Image Encoder → Vision Transformer (ViT)
Projection Layer → Maps both modalities into shared embedding space
Similarity Function → Cosine similarity

# Model used:

CLIP ViT-B/32
