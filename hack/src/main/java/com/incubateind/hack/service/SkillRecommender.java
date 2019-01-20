package com.incubateind.hack.service;

import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.Recommender;
import org.apache.mahout.cf.taste.similarity.ItemSimilarity;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;

import java.util.List;

import org.apache.mahout.cf.taste.impl.model.jdbc.MySQLJDBCDataModel;
import org.apache.mahout.cf.taste.impl.recommender.GenericItemBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.EuclideanDistanceSimilarity;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.springframework.stereotype.Service;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

@Service
public class SkillRecommender {

	private static final String SERVER_NAME = "localhost";
	private static final String USER_NAME = "root";
	private static final String PASSWORD = "root";
	private static final String DATABASE = "incubate_ind";

	public Recommender getRecommender() throws Exception {
		MysqlDataSource dataSource = new MysqlDataSource();
		dataSource.setServerName(SERVER_NAME);
		dataSource.setUser(USER_NAME);
		dataSource.setPassword(PASSWORD);
		dataSource.setDatabaseName(DATABASE);

		DataModel model = new MySQLJDBCDataModel(dataSource, "user_preferences", "user_id", "book_id", "preference",
				null);

		/* Get Pearson correlation instance from given model */
		// UserSimilarity similarity = new PearsonCorrelationSimilarity(model);

		ItemSimilarity itemSimilarity = new EuclideanDistanceSimilarity(model);
		Recommender recommender = new GenericItemBasedRecommender(model, itemSimilarity);
		/*
		 * Computes a neighborhood consisting of the nearest n users to a given user.
		 */
		// UserNeighborhood neighborhood = new NearestNUserNeighborhood(
		// NEIGHBOR_HOOD_SIZE, similarity, model);

		/* Get Recommender */
		// Recommender recommender = new GenericUserBasedRecommender(model,
		// neighborhood, similarity);

		return recommender;
	}

	public List<RecommendedItem> getRecommendations(Recommender recommender, int custId, int noOfRecommendations)
			throws Exception {
		return recommender.recommend(custId, noOfRecommendations);
	}

}
