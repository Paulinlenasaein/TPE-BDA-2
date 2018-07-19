package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmCommande;
import com.twmicronics.twmsos.entities.twmPanier;
import com.twmicronics.twmsos.entities.twmUser;
import java.util.Date;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmCommandeService {

    /**
     * stocke une commande passé en paramètre dans la base de données
     *
     * @param commande commande à stocker
     * @return la commande enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmCommande createOne(twmCommande commande) throws DataAccessException;

    /**
     * recherche une commande ayant un numéro ou index donné
     *
     * @param indexCom identifiant ou numéro de la commande
     * @return la commande correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmCommande findOne(String indexCom) throws DataAccessException;

    /**
     * supprime une commande passé en paramètre et présent dans la base de
     * données
     *
     * @param indexCom identifiant ou numéro de la commande à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(String indexCom) throws DataAccessException;

    /**
     * met à jour une commande passé en paramètre. La commande doit être déjà
     * présent dans la BDD
     *
     * @param commande commande à mettre à jour
     * @return la commande mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmCommande updateOne(twmCommande commande) throws DataAccessException;

    /**
     * renvoie la liste des commandes stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des commandes de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmCommande> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les commandes d'un client passé en paramètre
     *
     * @param client client ayant passé la commande
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les commandes dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmCommande> findAllByClient(twmUser client, int from, int to) throws DataAccessException;

    /**
     * recherche la commande d'un panier passé en paramètre
     *
     * @param panier panier de la commande à rechercher
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les commandes dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmCommande findAllByPanier(twmPanier panier, int from, int to) throws DataAccessException;

    /**
     * recherche les commandes ayant un état de solvabilité donné
     *
     * @param etat état de solvabilité de la commande
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les commandes correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmCommande> findAllByEtat(int etat, int from, int to) throws DataAccessException;

    /**
     * recherche les commandes passées à une date donnée
     *
     * @param dateCommande date de la commande
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les commandes correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmCommande> findAllByDateCommande(Date dateCommande, int from, int to) throws DataAccessException;

    /**
     * recherche les commandes passées à livrer à une date donnée
     *
     * @param dateLivraison date de la commande
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les commandes correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmCommande> findAllByDateLivraison(Date dateLivraison, int from, int to) throws DataAccessException;
}
