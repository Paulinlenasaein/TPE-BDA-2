package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmFacture;
import java.util.Date;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmFactureService {

    /**
     * stocke la facture passé en paramètre dans la base de données
     *
     * @param facture facture à stocker
     * @return la facture enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmFacture createOne(twmFacture facture) throws DataAccessException;

    /**
     * recherche la facture ayant un identifiant donné
     *
     * @param numFacture identifiant de la facture
     * @return la facture correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmFacture findOne(String numFacture) throws DataAccessException;

    /**
     * supprime la facture passé en paramètre et présent dans la base de données
     *
     * @param numFacture identifiant de la facture à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(String numFacture) throws DataAccessException;

    /**
     * met à jour la facture passé en paramètre. La facture doit être déjà
     * présent dans la BDD
     *
     * @param facture facture à mettre à jour
     * @return la facture mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmFacture updateOne(twmFacture facture) throws DataAccessException;

    /**
     * renvoie la liste des factures stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des factures de solvabilité de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmFacture> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les factures d'un client passé en paramètre
     *
     * @param client identifiant du client
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les factures dont le client détenteur est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmFacture> findAllByClient(String client, int from, int to) throws DataAccessException;

    /**
     * recherche la facture d'un panier passé en paramètre
     *
     * @param indexPan identifiant du panier
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la facture dont le panier est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmFacture findAllByPanier(String indexPan, int from, int to) throws DataAccessException;

    /**
     * recherche les factures des achats fait à une date donnée
     *
     * @param dateAchat date de l'achat
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les factures dont la date d'achat des produits est passé en
     * paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmFacture findAllByDateAchat(Date dateAchat, int from, int to) throws DataAccessException;

    /**
     * recherche les factures ayant une date de facturation donnée
     *
     * @param dateFacturation date de l'achat
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les factures correspondante
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmFacture findAllByDateFacturation(Date dateFacturation, int from, int to) throws DataAccessException;
}
