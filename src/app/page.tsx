"use client";
import * as React from 'react';

import Container from "@mui/material/Container";

import AppHeader from "@/components/Header/AppHeader";
import Footer from "@/components/Footer/Footer";
import MovieList from "@/components/Footer/Movie List/MovieList";
import { Movie } from '@mui/icons-material';



export default function Home() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <MovieList />
      </Container>
      <Footer/>
    </>
  );
}