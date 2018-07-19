package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmPromotion;
import java.util.Date;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmPromotionService {

    /**
     * stocke la promotion passé en paramètre dans la base de données
     *
     * @param promotion promotion à stocker
     * @return la promotion enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPromotion createOne(twmPromotion promotion) throws DataAccessException;

    /**
     * recherche la promotion ayant un identifiant donné
     *
     * @param id identifiant de la promotion
     * @return la promotion correspondante
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPromotion findOne(Long id) throws DataAccessException;

    /**
     * supprime la promotion passé en paramètre et présent dans la base de
     * données
     *
     * @param id identifiant de la promotion à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(Long id) throws DataAccessException;

    /**
     * met à jour la promotion passé en paramètre. La promotion doit être déjà
     * présent dans la BDD
     *
     * @param promotion promotion à mettre à jour
     * @return la promotion mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPromotion updateOne(twmPromotion promotion) throws DataAccessException;

    /**
     * renvoie la liste des promotions stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des promotions de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPromotion> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les promotions déjà éffectuées sur un produit donné
     *
     * @param produit identifiant du produit concerné
     * @return les promotions d'un produit passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPromotion> findOneByProduit(Long produit) throws DataAccessException;

    /**
     * recherche les promotion en cours ou passées
     *
     * @param state état de la promotion
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les promotions ayant l'état passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPromotion> findAllByState(int state, int from, int to) throws DataAccessException;

    /**
     * recherche les promotions ayant un durée donnée
     *
     * @param dureePromo durée de la promotion
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les promotions dont la durée est passée en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPromotion> findAllByDureePromo(int dureePromo, int from, int to) throws DataAccessException;

    /**
     * recherche les promotions ayant débutées à date donnée (en vente ou pas)
     *
     * @param dateDebut date de lancement de la promotion
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les promotions correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPromotion> findAllByDateDebut(Date dateDebut, int from, int to) throws DataAccessException;

    /**
     * recherche les promotions ayant débutées à date donnée (en vente ou pas)
     *
     * @param dateFin date d'arrêt de la promotion
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les promotions correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPromotion> findAllByDateFin(Date dateFin, int from, int to) throws DataAccessException;
}
