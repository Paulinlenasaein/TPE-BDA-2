package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmProduitDao;
import com.twmicronics.twmsos.dao.ItwmPromotionDao;
import com.twmicronics.twmsos.entities.twmPromotion;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmPromotionService;
import java.util.Date;
import java.util.Optional;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author paulinlenasaein
 */
@Service
@Transactional
public class twmPromotionServiceImpl implements ItwmPromotionService {
    
    @Autowired
    private ItwmPromotionDao promotionDao;
    
    @Autowired
    private ItwmProduitDao produitDao;
    
    @Override
    public twmPromotion createOne(twmPromotion promotion) throws DataAccessException {
        return promotionDao.save(promotion);
    }

    @Override
    public twmPromotion findOne(Long id) throws DataAccessException {
        Optional<twmPromotion> pd = promotionDao.findById(id);
        twmPromotion promotion = pd.isPresent() ? pd.get() : null;
        return promotion;
    }

    @Override
    public void deleteOne(Long id) throws DataAccessException {
        twmPromotion pr = promotionDao.getOne(id);
        if (pr != null) {
            promotionDao.delete(pr);
        } else {
            throw new WebApplicationException("Promotion innexistante", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmPromotion updateOne(twmPromotion promotion) throws DataAccessException {
        return promotionDao.save(promotion);
    }

    @Override
    public Page<twmPromotion> findAll(int from, int to) throws DataAccessException {
        return promotionDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateFin")));
    }

    @Override
    public Page<twmPromotion> findAllByProduit(Long produit, int from, int to) throws DataAccessException {
        return promotionDao.findByProduit(produitDao.getOne(produit), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateFin")));
    }

    @Override
    public Page<twmPromotion> findAllByState(int state, int from, int to) throws DataAccessException {
        return promotionDao.findByState(state, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateFin")));
    }

    @Override
    public Page<twmPromotion> findAllByDureePromo(int dureePromo, int from, int to) throws DataAccessException {
        return promotionDao.findByDureePromo(dureePromo, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateDebut")));
    }

    @Override
    public Page<twmPromotion> findAllByDateDebut(Date dateDebut, int from, int to) throws DataAccessException {
        return promotionDao.findByDateDebut(dateDebut, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "id")));
    }

    @Override
    public Page<twmPromotion> findAllByDateFin(Date dateFin, int from, int to) throws DataAccessException {
        return promotionDao.findByDateFin(dateFin, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "id")));
    }

}
