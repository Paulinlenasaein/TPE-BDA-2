package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmRequete;
import com.twmicronics.twmsos.entities.twmUser;
import java.util.Date;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmRequeteDao extends JpaRepository<twmRequete, Long> {

    /**
     * retourne les requetes éffectuées par un utilisateur donné
     *
     * @param client client ayant éffectué ces requêtes
     * @param page pour la pagination des résultats
     * @return une page d'objets twmRequete
     */
    public Page<twmRequete> findByClient(twmUser client, Pageable page);
    
     /**
     * retourne les requetes éffectuées par un utilisateur donné
     *
     * @param admin administrateur éffectué ces requêtes
     * @param page pour la pagination des résultats
     * @return une page d'objets twmRequete
     */
    public Page<twmRequete> findByAdmin(twmUser admin, Pageable page);

    /**
     * retourne les requetes éffectuées à une date donné
     *
     * @param dateEnvoi date d'envoi de ces requêtes
     * @param page pour la pagination des résultats
     * @return une page d'objets twmRequete
     */
    public Page<twmRequete> findByDateEnvoi(Date dateEnvoi, Pageable page);

    /**
     * retourne les requetes ayant un status donné et éffectuées par un client(requête ou réponse)
     *
     * @param client client ayant éffectué des requêtes
     * @param status status de la requête (1: requête et 0: réponse)
     * @param page pour la pagination des résultats
     * @return une page d'objets twmRequete
     */
    public Page<twmRequete> findByClientAndStatus(twmUser client, int status, Pageable page);
    
    /**
     * retourne les requetes ayant un status donné et éffectuées par un administrateur (requête ou réponse)
     *
     * @param admin administrateurr ayant éffectué des requêtes
     * @param status status de la requête (1: requête et 0: réponse)
     * @param page pour la pagination des résultats
     * @return une page d'objets twmRequete
     */
    public Page<twmRequete> findByAdminAndStatus(twmUser admin, int status, Pageable page);
    
    /**
     * retourne les requetes ayant un status donné (requête ou réponse)
     *
     * @param status status de la requête (1: requête et 0: réponse)
     * @param page pour la pagination des résultats
     * @return une page d'objets twmRequete
     */
    public Page<twmRequete> findByStatus(int status, Pageable page);
}
