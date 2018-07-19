package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmPanier;
import java.util.Date;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmPanierService {

    /**
     * stocke le panier passé en paramètre dans la base de données
     *
     * @param panier panier à stocker
     * @return le panier enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPanier createOne(twmPanier panier) throws DataAccessException;

    /**
     * recherche le panier ayant un identifiant donné
     *
     * @param indexPan identifiant du panier
     * @return le panier correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPanier findOne(String indexPan) throws DataAccessException;

    /**
     * supprime le panier passé en paramètre et présent dans la base de données
     *
     * @param indexPan identifiant du panier à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(String indexPan) throws DataAccessException;

    /**
     * met à jour le panier passé en paramètre. La panier doit être déjà présent
     * dans la BDD
     *
     * @param panier panier à mettre à jour
     * @return le panier mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPanier updateOne(twmPanier panier) throws DataAccessException;

    /**
     * renvoie la liste des paniers stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des paniers de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanier> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les paniers d'un client passé en paramètre
     *
     * @param client identifiant du client
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les paniers dont le client détenteur est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanier> findAllByClient(String client, int from, int to) throws DataAccessException;

    /**
     * recherche les panier ayant un solde donné
     *
     * @param solde solde total du panier
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return le panier ayant le solde passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanier> findOneBySoldeTotal(Double solde, int from, int to) throws DataAccessException;

    /**
     * recherche les paniers des achats fait à une date donnée
     *
     * @param dateJour date de l'achat
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les paniers dont la date d'achat de ses produits est passé en
     * paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanier> findAllByDateJour(Date dateJour, int from, int to) throws DataAccessException;

    /**
     * recherche les paniers ayant un état d'acquittement donnée
     *
     * @param ack etat d'acquittement
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les paniers correspondante
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanier> findAllByAck(int ack, int from, int to) throws DataAccessException;

}
