package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmStatistique;
import java.util.Date;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmStatistiqueService {

    /**
     * stocke une statistique passé en paramètre dans la base de données
     *
     * @param statistique statistique à stocker
     * @return la statistique enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmStatistique createOne(twmStatistique statistique) throws DataAccessException;

    /**
     * recherche une statistique donné
     *
     * @param id identifiant de la statistique echerchée
     * @return la statistique correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmStatistique findOne(Long id) throws DataAccessException;

    /**
     * supprime une statistique passé en paramètre, dans la base de données
     *
     * @param id identifiant de la statistique à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(Long id) throws DataAccessException;

    /**
     * met à jour une statistique passé en paramètre. Ellel doit être déjà
     * présent dans la BDD
     *
     * @param statistique statistique à mettre à jour
     * @return la statistique mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmStatistique updateOne(twmStatistique statistique) throws DataAccessException;

    /**
     * renvoie la liste des statistiques stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des statistiques de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmStatistique> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche la statistique de la date passé en paramètre
     *
     * @param dateJour date à laquelle on veut avoir la statistique
     * @return la statistique correspondante à la date
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmStatistique findOneByDateJour(Date dateJour) throws DataAccessException;
}
