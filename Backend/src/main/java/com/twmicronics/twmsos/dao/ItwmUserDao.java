package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmRole;
import com.twmicronics.twmsos.entities.twmUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmUserDao extends JpaRepository<twmUser, Long> {

    /**
     * retourne un utilisateur ayant un nom d'utilisateur donné
     *
     * @param username nom d'utilisateur recherché
     * @return un objet twmUser
     */
    public twmUser findByUsername(String username);

    /**
     * retourne les utilisateurs ayant un nom donné
     *
     * @param firstName nom de l'utilisateur recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmUser
     */
    public Page<twmUser> findByFirstNameIgnoreCase(String firstName, Pageable page);

    /**
     * retourne les utilisateurs ayant un prenom donné
     *
     * @param firstName nom de l'utilisateur recherché
     * @param lastName prenom de l'utilisateur recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmUser
     */
    public Page<twmUser> findByFirstNameAndLastNameIgnoreCase(String firstName, String lastName, Pageable page);

    /**
     * retourne un utilisateur ayant une adresse mail donné
     *
     * @param email adresse mail de l'utilisateur recherché
     * @return un objet twmUser
     */
    public twmUser findByEmail(String email);

    /**
     * retourne un utilisateur ayant un numéro de téléphone donné
     *
     * @param telephone numero de téléphone de l'utilisateur recherché
     * @return un objet twmUser
     */
    public twmUser findByTelephone(String telephone);

    /**
     * retourne les utilisateurs ayant un état du compte donné
     *
     * @param state etat du compte de l'utilisateur recherché
     * @param page pour la pagination des résultats
     * @return un objet twmUser
     */
    public Page<twmUser> findByState(int state, Pageable page);

    /**
     * retourne les utilisateurs ayant un role donné
     *
     * @param role nom de l'utilisateur recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmUser
     */
    public Page<twmUser> findByRoleIgnoreCase(twmRole role, Pageable page);

}
