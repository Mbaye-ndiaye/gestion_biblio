import React, { useState } from 'react'
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  InputBase,
  Divider,
  Avatar,
  ListItemAvatar,
  
} from '@mui/material'
import { Search as SearchIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material'
import Livre5 from '../../assets/image/livre4.jpeg'
import Livre6 from '../../assets/image/livre5.jpeg'
import Livre7 from '../../assets/image/livre6.jpeg'
import Livre8 from '../../assets/image/livre7.jpeg'
import Livre9 from '../../assets/image/livre8.jpeg'
import Header from '../../components/navBarUtilisateur/Header'

// Données factices pour les livres empruntés
const livresEmpruntes = [
  { id: 1, titre: "L'Étranger", auteur: "Albert Camus", dateEmprunt: "2023-05-01", dateRetour: "2023-06-01", imageCouverture: Livre5 },
  { id: 2, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", dateEmprunt: "2023-05-05", dateRetour: "2023-06-05", imageCouverture: Livre6 },
  { id: 3, titre: "Madame Bovary", auteur: "Gustave Flaubert", dateEmprunt: "2023-05-10", dateRetour: "2023-06-10", imageCouverture: Livre7 },
  { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", dateEmprunt: "2023-05-15", dateRetour: "2023-06-15", imageCouverture: Livre8 },
  { id: 5, titre: "Notre-Dame de Paris", auteur: "Victor Hugo", dateEmprunt: "2023-05-20", dateRetour: "2023-06-20", imageCouverture: Livre9 },
  { id: 1, titre: "L'Étranger", auteur: "Albert Camus", dateEmprunt: "2023-05-01", dateRetour: "2023-06-01", imageCouverture: Livre5 },
  { id: 2, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", dateEmprunt: "2023-05-05", dateRetour: "2023-06-05", imageCouverture: Livre6 },
  { id: 3, titre: "Madame Bovary", auteur: "Gustave Flaubert", dateEmprunt: "2023-05-10", dateRetour: "2023-06-10", imageCouverture: Livre7 },
  { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", dateEmprunt: "2023-05-15", dateRetour: "2023-06-15", imageCouverture: Livre8 },
  { id: 5, titre: "Notre-Dame de Paris", auteur: "Victor Hugo", dateEmprunt: "2023-05-20", dateRetour: "2023-06-20", imageCouverture: Livre9 },
]

export default function Emprunte() {
  const [recherche, setRecherche] = useState('')

  const livresFiltres = livresEmpruntes.filter(livre =>
    livre.titre.toLowerCase().includes(recherche.toLowerCase()) ||
    livre.auteur.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <>
      <Header/>
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 2 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Rechercher un livre"
            inputProps={{ 'aria-label': 'rechercher un livre' }}
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <List>
          {livresFiltres.map((livre, index) => (
            <React.Fragment key={livre.id}>
              {index > 0 && <Divider variant="inset" component="li" />}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={livre.imageCouverture}
                    alt={`Couverture de ${livre.titre}`}
                    sx={{ width: 56, height: 80, mr: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={livre.titre}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {livre.auteur}
                      </Typography>
                      {` — Emprunté le ${livre.dateEmprunt}, à retourner le ${livre.dateRetour}`}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="details">
                    <ArrowForwardIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Container>
    </>
  )
}